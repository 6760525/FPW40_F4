from rest_framework.views import APIView
from rest_framework import viewsets, permissions, generics  # new
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer


class RecipeAPIView(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filterset_fields = ['category']

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class CategoryAPIView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
