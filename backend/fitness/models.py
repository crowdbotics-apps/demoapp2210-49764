from django.conf import settings
from django.db import models


class NutritionPlan(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="nutritionplan_user",
    )
    description = models.TextField()
    target_date = models.DateField(
        null=True,
        blank=True,
    )
    calories_per_day = models.IntegerField()
    goal = models.ForeignKey(
        "fitness.Goal",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="nutritionplan_goal",
    )


class Comment(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="comment_user",
    )
    post = models.ForeignKey(
        "fitness.CommunityPost",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="comment_post",
    )
    content = models.TextField()
    timestamp = models.DateTimeField(
        null=True,
        blank=True,
    )


class Notification(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="notification_user",
    )
    message = models.TextField()
    timestamp = models.DateTimeField(
        null=True,
        blank=True,
    )
    read = models.BooleanField(
        default="False",
    )


class WearableData(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="wearabledata_user",
    )
    data_type = models.CharField(
        max_length=50,
    )
    value = models.FloatField()
    timestamp = models.DateTimeField(
        null=True,
        blank=True,
    )


class Leaderboard(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="leaderboard_user",
    )
    score = models.IntegerField()
    rank = models.IntegerField()
    timestamp = models.DateTimeField(
        null=True,
        blank=True,
    )


class Profile(models.Model):
    "Generated Model"
    user = models.OneToOneField(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="profile_user",
    )
    bio = models.TextField(
        null=True,
        blank=True,
    )
    goal = models.ForeignKey(
        "fitness.Goal",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="profile_goal",
    )
    profile_picture = models.ImageField(
        null=True,
        blank=True,
    )
    fitness_level = models.CharField(
        max_length=50,
        null=True,
        blank=True,
    )


class CustomReminder(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="customreminder_user",
    )
    message = models.TextField()
    reminder_time = models.DateTimeField(
        null=True,
        blank=True,
    )
    recurring = models.BooleanField(
        default="False",
    )


class Exercise(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    difficulty = models.CharField(
        max_length=50,
    )
    equipment = models.CharField(
        max_length=255,
    )
    tutorial_video = models.URLField(
        null=True,
        blank=True,
    )


class Meal(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="meal_user",
    )
    meal_time = models.DateTimeField(
        null=True,
        blank=True,
    )
    description = models.TextField()
    calories = models.IntegerField()
    proteins = models.FloatField()
    carbs = models.FloatField()
    fats = models.FloatField()


class Workout(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="workout_user",
    )
    exercise = models.ForeignKey(
        "fitness.Exercise",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="workout_exercise",
    )
    sets = models.IntegerField()
    reps = models.IntegerField()
    weight = models.FloatField()
    date = models.DateTimeField(
        null=True,
        blank=True,
    )


class CommunityPost(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="communitypost_user",
    )
    content = models.TextField()
    timestamp = models.DateTimeField(
        null=True,
        blank=True,
    )
    likes = models.IntegerField(
        default="0",
    )


class Goal(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="goal_user",
    )
    description = models.TextField()
    target_date = models.DateField(
        null=True,
        blank=True,
    )
    current_progress = models.FloatField(
        null=True,
        blank=True,
    )
    goal_amount = models.FloatField()


# Create your models here.
