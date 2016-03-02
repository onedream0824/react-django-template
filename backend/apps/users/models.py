from django.db import models
from custom_user.models import AbstractEmailUser


class EmailUser(AbstractEmailUser):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)

    class Meta:
        permissions = (
            ("view_user", "Can view users"),
        )

    def get_full_name(self):
        return "{first_name} {last_name}".format(
            first_name=self.first_name,
            last_name=self.last_name,
        )
