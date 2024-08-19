from django.shortcuts import render

# Create your views here.

def home(request):
    context = {
        'title': 'Me',
        'message': 'Welcome to my website',
        'author': 'Gneomar Natzmar'
    }
    return render(request, 'home.html', context)