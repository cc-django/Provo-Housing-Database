# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-02-19 18:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='listing',
            old_name='distance_from_universities',
            new_name='distance_from_BYU',
        ),
        migrations.AddField(
            model_name='listing',
            name='distance_from_UVU',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]