from django.urls import path
import views

urlpatterns = [
    path('testPost/', views.dataPost),
]