# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-02-25 18:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20160225_1155'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='amenity',
            field=models.ManyToManyField(blank=True, to='main.Amenities'),
        ),
    ]