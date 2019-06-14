from django.urls import path
from .views import takeUserInputView, findData

urlpatterns = [
    path('', takeUserInputView, name = 'home'),
    path('give_results', findData, name = 'give_results'),
    ] 