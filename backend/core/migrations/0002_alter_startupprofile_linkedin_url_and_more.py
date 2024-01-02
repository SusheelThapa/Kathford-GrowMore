# Generated by Django 5.0 on 2024-01-02 13:02

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='startupprofile',
            name='linkedin_url',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='startupprofile',
            name='logo',
            field=models.FileField(blank=True, null=True, upload_to='core/startups/logo'),
        ),
        migrations.AlterField(
            model_name='startupprofile',
            name='patent',
            field=models.FileField(blank=True, null=True, upload_to='core/startups/patent'),
        ),
        migrations.AlterField(
            model_name='startupprofile',
            name='registeration_info',
            field=models.FileField(blank=True, null=True, upload_to='core/startups/registeration'),
        ),
        migrations.AlterField(
            model_name='startupprofile',
            name='website_url',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.CreateModel(
            name='VentureCaptialInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('phone_no', models.CharField(max_length=255)),
                ('profile_pic', models.FileField(upload_to='core/vcs/profile_pic')),
                ('pan', models.FileField(upload_to='core/vcs/pan')),
                ('linkedin_url', models.CharField(blank=True, max_length=255, null=True)),
                ('facebook_url', models.CharField(blank=True, max_length=255, null=True)),
                ('twitter_url', models.CharField(blank=True, max_length=255, null=True)),
                ('website', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.TextField()),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
