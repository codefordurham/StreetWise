from django.urls import path
from .views import takeUserInputView, main

urlpatterns = [
    path('', takeUserInputView, name = 'home'),
    path('give_results', main, name = 'results'),
    ] 