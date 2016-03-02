import json

from django.contrib.auth.decorators import login_required
from django.shortcuts import render


@login_required
def app(request):
    context = {
        'permissions': json.dumps(list(request.user.get_all_permissions()))
    }

    template = 'backend/app.html'
    return render(request, template, context)
