from rest_framework import serializers

from todo.models import Todo

class TodoSerializer(serializers.ModelSerializer):
    """Serializer for Todo"""

    class Meta:
        model = Todo
        fields = ['id', 'description', 'created_at']
        read_only_fields = ['id', 'created_at']