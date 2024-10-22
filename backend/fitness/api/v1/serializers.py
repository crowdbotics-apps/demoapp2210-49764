from rest_framework import serializers
from fitness.models import (
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


class NutritionPlanSerializer(serializers.ModelSerializer):

    class Meta:
        model = NutritionPlan
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = "__all__"


class NotificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notification
        fields = "__all__"


class WearableDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = WearableData
        fields = "__all__"


class LeaderboardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Leaderboard
        fields = "__all__"


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = "__all__"


class CustomReminderSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomReminder
        fields = "__all__"


class ExerciseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Exercise
        fields = "__all__"


class MealSerializer(serializers.ModelSerializer):

    class Meta:
        model = Meal
        fields = "__all__"


class WorkoutSerializer(serializers.ModelSerializer):

    class Meta:
        model = Workout
        fields = "__all__"


class CommunityPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = CommunityPost
        fields = "__all__"


class GoalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Goal
        fields = "__all__"
