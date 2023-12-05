from django.db import models

class Todo(models.Model):
    description = models.TextField()
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.description
