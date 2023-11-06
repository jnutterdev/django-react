from django.shortcuts import render
from django.views.generic import ListView
from rest_framework import generics
from frontend.models import Post
from .serializers import PostSerializer

def index(request):
  return render(request, "frontend/index.html")

class BlogListView(ListView):
    model = Post
    template_name = 'frontend/index.html'

class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
