# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-02-29 22:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto_20160229_1542'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='upload_image',
            field=models.ImageField(blank=True, null=True, upload_to='static/images/'),
        ),
    ]
