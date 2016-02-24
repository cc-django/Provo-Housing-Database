# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-02-19 23:43
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Amenities',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amenity', models.CharField(max_length=20)),
            ],
            options={
                'verbose_name_plural': 'amenities',
            },
        ),
        migrations.CreateModel(
            name='ComplexName',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('roommates', models.IntegerField()),
                ('availability_date', models.DateField()),
                ('gender_choices', models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('Other', 'Other')], default='M', max_length=5)),
                ('room_type', models.CharField(choices=[('Shared', 'Shared'), ('Private', 'Private'), ('Married', 'Married')], default='Private', max_length=7)),
                ('furnishings_type', models.CharField(choices=[('Furnished', 'Furnished'), ('Partial Furnished', 'Partial Furnished'), ('Unfurnished', 'Unfurnished')], default='Unfurnished', max_length=20)),
                ('contract_length', models.CharField(choices=[('Fall', 'Fall'), ('Summer', 'Summer'), ('Winter', 'Winter'), ('Fall/Winter', 'Fall/Winter'), ('Winter/Summer', 'Winter/Summer'), ('Summer/Fall', 'Summer/Fall'), ('Full Year', 'Full Year'), ('Other', 'Other')], default='Fall/Winter', max_length=15)),
                ('building_type', models.CharField(choices=[('Apt', 'Apartment'), ('House', 'House')], default='Apt', max_length=10)),
                ('BYU_housing', models.BooleanField(default=False)),
                ('apartment_complex', models.BooleanField(default=True)),
                ('distance_from_BYU', models.IntegerField(blank=True, null=True)),
                ('distance_from_UVU', models.IntegerField(blank=True, null=True)),
                ('address', models.CharField(max_length=70)),
                ('city', models.CharField(max_length=70)),
                ('state', models.CharField(max_length=70)),
                ('selling_price', models.IntegerField()),
                ('description', models.TextField()),
                ('upload_image', models.ImageField(blank=True, null=True, upload_to=b'')),
                ('amenity', models.ManyToManyField(to='main.Amenities')),
                ('complex_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.ComplexName')),
            ],
        ),
    ]
