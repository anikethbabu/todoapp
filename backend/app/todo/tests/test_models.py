from django.test import TestCase
from todo.models import Todo

class TodoTestCase(TestCase):
    def test_create_todo(self):
        """Test creating a todo is successful."""
        todo = Todo.objects.create(description='Test description')
        self.assertEqual(str(todo), todo.description)
