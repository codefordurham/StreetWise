import io
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect, FileResponse, HttpResponseBadRequest
from .forms import AddressEntryForm
from .models import AddressEntry
from .get_address_info import get_address_info
from reportlab.pdfgen import canvas
from django.views.decorators.http import require_http_methods


# Get data from end user
def takeUserInputView(request):

    form = AddressEntryForm(request.POST or None)

    if form.is_valid():
        form.save()

    context = {"form": form}
    return render(request, "home.html", context)


def main(request):

    if request.method == "POST":
        address = request.POST.get("address")
    address = address + ' Durham, NC'

    info = get_address_info(address)

    # send data to be displayed on results page
    return render(
        request,
        "./results.html",
        info,
    )

@require_http_methods(["POST"])
def downloadPDF(request):

    address = request.POST.get("address")
    if(address is None):
        return HttpResponseBadRequest()

    addressInfo = get_address_info(address)
    
    # Create a file-like buffer to receive PDF data.
    buffer = io.BytesIO()

    # Create the PDF object, using the buffer as its "file."
    p = canvas.Canvas(buffer)

    # Draw things on the PDF. Here's where the PDF generation happens.
    # See the ReportLab documentation for the full list of functionality.
    p.drawString(100, 100, addressInfo["address"])

    # Close the PDF object cleanly, and we're done.
    p.showPage()
    p.save()

    # FileResponse sets the Content-Disposition header so that browsers
    # present the option to save the file.
    buffer.seek(0)
    return FileResponse(buffer, as_attachment=True, filename='hello.pdf')