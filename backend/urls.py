from django.conf.urls import url, include
from django.contrib.auth.views import login
from django.contrib import admin

from .views import app, index

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('users.urls')),
    url(r'^app/', app, name='app'),
    url('^auth/login/$', login, name='login'),
    url('^$', index, name='index'),
]
