# Generated by Django 4.2.4 on 2024-01-02 18:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_startupprofile_linkedin_url_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='foundersinfo',
            name='startup',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='founder', to='core.startupprofile'),
        ),
    ]
