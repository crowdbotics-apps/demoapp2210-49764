from django.contrib import admin
from .models import (
    Comment,
    CommunityPost,
    CustomReminder,
    Exercise,
    Goal,
    Leaderboard,
    Meal,
    Notification,
    NutritionPlan,
    Profile,
    WearableData,
    Workout,
)

admin.site.register(NutritionPlan)
admin.site.register(Comment)
admin.site.register(Notification)
admin.site.register(WearableData)
admin.site.register(Leaderboard)
admin.site.register(Profile)
admin.site.register(CustomReminder)
admin.site.register(Exercise)
admin.site.register(Meal)
admin.site.register(Workout)
admin.site.register(CommunityPost)
admin.site.register(Goal)

# Register your models here.
