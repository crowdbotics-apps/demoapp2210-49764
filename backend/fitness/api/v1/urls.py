from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CommentViewSet,
    CommunityPostViewSet,
    CustomReminderViewSet,
    ExerciseViewSet,
    GoalViewSet,
    LeaderboardViewSet,
    MealViewSet,
    NotificationViewSet,
    NutritionPlanViewSet,
    ProfileViewSet,
    WearableDataViewSet,
    WorkoutViewSet,
)

router = DefaultRouter()
router.register("nutritionplan", NutritionPlanViewSet)
router.register("comment", CommentViewSet)
router.register("notification", NotificationViewSet)
router.register("wearabledata", WearableDataViewSet)
router.register("leaderboard", LeaderboardViewSet)
router.register("profile", ProfileViewSet)
router.register("customreminder", CustomReminderViewSet)
router.register("exercise", ExerciseViewSet)
router.register("meal", MealViewSet)
router.register("workout", WorkoutViewSet)
router.register("communitypost", CommunityPostViewSet)
router.register("goal", GoalViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
