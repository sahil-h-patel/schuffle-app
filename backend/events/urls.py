from django.urls import path
from . import views

urlpatterns = [
    path('google-auth', views.google_auth, name='google_auth'),
    # path('auth/callback', views.google_calendar_callback, name='exchange_auth_code_for_tokens'),
]
