from django.urls import path
from .views import takeUserInputView, main, downloadPDF

urlpatterns = [
    path('', takeUserInputView, name = 'home'),
    path('give_results', main, name = 'results'),
    path('pdf', downloadPDF, name = 'download_pdf'),
] 