from django.shortcuts import render, redirect
from .models import *

# Create your views here.

def index(request):
    return render(request, 'index.html')

def home(request):
    cursos_lista = Curso.objects.all() 
    data = {
        'cursos': cursos_lista
    }
    return render(request, 'home.html', data)

def aboutme(request):
    return render(request, 'aboutme.html')

def projects(request):
    return render(request, 'projects.html')

def contac(request):
    return render(request, 'contact.html')

def eliminarCurso(request, id):
    curso = Curso.objects.get(id = id)
    curso.delete()

    return redirect('home')

def registrarCurso(request):
    nombre = request.POST['txtNombre']
    creditos = request.POST['numCreditos']

    curso = Curso.objects.create(nombre=nombre, creditos=creditos)
    return redirect('home')
