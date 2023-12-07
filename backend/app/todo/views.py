"""
Views for the todo APIs
"""
from rest_framework import (
    viewsets,
    mixins,
)
from todo.serializers import TodoSerializer
from todo.models import Todo

class TodoViewSet(mixins.CreateModelMixin,
                  mixins.DestroyModelMixin, 
                  mixins.UpdateModelMixin,
                  mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    """Manage todo in the database."""
    queryset = Todo.objects.all().order_by('id')
    serializer_class = TodoSerializer


