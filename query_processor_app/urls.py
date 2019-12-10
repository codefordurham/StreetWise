from django.urls import path
from .views import takeUserInputView, render_results_as_html, render_results_as_json

urlpatterns = [
    path("", takeUserInputView, name="home"),
    path("give_results", render_results_as_html, name="results"),
    path("api/results", render_results_as_json, name="json_results"),
]
