import axios from "axios"
const demoappAPI = axios.create({
  baseURL: "https://demoapp2210-49764.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return demoappAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_comment_list(payload) {
  return demoappAPI.get(`/api/v1/comment/`)
}
function api_v1_comment_create(payload) {
  return demoappAPI.post(`/api/v1/comment/`, payload)
}
function api_v1_comment_retrieve(payload) {
  return demoappAPI.get(`/api/v1/comment/${payload.id}/`)
}
function api_v1_comment_update(payload) {
  return demoappAPI.put(`/api/v1/comment/${payload.id}/`, payload)
}
function api_v1_comment_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/comment/${payload.id}/`, payload)
}
function api_v1_comment_destroy(payload) {
  return demoappAPI.delete(`/api/v1/comment/${payload.id}/`)
}
function api_v1_communitypost_list(payload) {
  return demoappAPI.get(`/api/v1/communitypost/`)
}
function api_v1_communitypost_create(payload) {
  return demoappAPI.post(`/api/v1/communitypost/`, payload)
}
function api_v1_communitypost_retrieve(payload) {
  return demoappAPI.get(`/api/v1/communitypost/${payload.id}/`)
}
function api_v1_communitypost_update(payload) {
  return demoappAPI.put(`/api/v1/communitypost/${payload.id}/`, payload)
}
function api_v1_communitypost_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/communitypost/${payload.id}/`, payload)
}
function api_v1_communitypost_destroy(payload) {
  return demoappAPI.delete(`/api/v1/communitypost/${payload.id}/`)
}
function api_v1_customreminder_list(payload) {
  return demoappAPI.get(`/api/v1/customreminder/`)
}
function api_v1_customreminder_create(payload) {
  return demoappAPI.post(`/api/v1/customreminder/`, payload)
}
function api_v1_customreminder_retrieve(payload) {
  return demoappAPI.get(`/api/v1/customreminder/${payload.id}/`)
}
function api_v1_customreminder_update(payload) {
  return demoappAPI.put(`/api/v1/customreminder/${payload.id}/`, payload)
}
function api_v1_customreminder_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/customreminder/${payload.id}/`, payload)
}
function api_v1_customreminder_destroy(payload) {
  return demoappAPI.delete(`/api/v1/customreminder/${payload.id}/`)
}
function api_v1_exercise_list(payload) {
  return demoappAPI.get(`/api/v1/exercise/`)
}
function api_v1_exercise_create(payload) {
  return demoappAPI.post(`/api/v1/exercise/`, payload)
}
function api_v1_exercise_retrieve(payload) {
  return demoappAPI.get(`/api/v1/exercise/${payload.id}/`)
}
function api_v1_exercise_update(payload) {
  return demoappAPI.put(`/api/v1/exercise/${payload.id}/`, payload)
}
function api_v1_exercise_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/exercise/${payload.id}/`, payload)
}
function api_v1_exercise_destroy(payload) {
  return demoappAPI.delete(`/api/v1/exercise/${payload.id}/`)
}
function api_v1_goal_list(payload) {
  return demoappAPI.get(`/api/v1/goal/`)
}
function api_v1_goal_create(payload) {
  return demoappAPI.post(`/api/v1/goal/`, payload)
}
function api_v1_goal_retrieve(payload) {
  return demoappAPI.get(`/api/v1/goal/${payload.id}/`)
}
function api_v1_goal_update(payload) {
  return demoappAPI.put(`/api/v1/goal/${payload.id}/`, payload)
}
function api_v1_goal_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/goal/${payload.id}/`, payload)
}
function api_v1_goal_destroy(payload) {
  return demoappAPI.delete(`/api/v1/goal/${payload.id}/`)
}
function api_v1_leaderboard_list(payload) {
  return demoappAPI.get(`/api/v1/leaderboard/`)
}
function api_v1_leaderboard_create(payload) {
  return demoappAPI.post(`/api/v1/leaderboard/`, payload)
}
function api_v1_leaderboard_retrieve(payload) {
  return demoappAPI.get(`/api/v1/leaderboard/${payload.id}/`)
}
function api_v1_leaderboard_update(payload) {
  return demoappAPI.put(`/api/v1/leaderboard/${payload.id}/`, payload)
}
function api_v1_leaderboard_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/leaderboard/${payload.id}/`, payload)
}
function api_v1_leaderboard_destroy(payload) {
  return demoappAPI.delete(`/api/v1/leaderboard/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return demoappAPI.post(`/api/v1/login/`, payload)
}
function api_v1_meal_list(payload) {
  return demoappAPI.get(`/api/v1/meal/`)
}
function api_v1_meal_create(payload) {
  return demoappAPI.post(`/api/v1/meal/`, payload)
}
function api_v1_meal_retrieve(payload) {
  return demoappAPI.get(`/api/v1/meal/${payload.id}/`)
}
function api_v1_meal_update(payload) {
  return demoappAPI.put(`/api/v1/meal/${payload.id}/`, payload)
}
function api_v1_meal_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/meal/${payload.id}/`, payload)
}
function api_v1_meal_destroy(payload) {
  return demoappAPI.delete(`/api/v1/meal/${payload.id}/`)
}
function api_v1_notification_list(payload) {
  return demoappAPI.get(`/api/v1/notification/`)
}
function api_v1_notification_create(payload) {
  return demoappAPI.post(`/api/v1/notification/`, payload)
}
function api_v1_notification_retrieve(payload) {
  return demoappAPI.get(`/api/v1/notification/${payload.id}/`)
}
function api_v1_notification_update(payload) {
  return demoappAPI.put(`/api/v1/notification/${payload.id}/`, payload)
}
function api_v1_notification_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/notification/${payload.id}/`, payload)
}
function api_v1_notification_destroy(payload) {
  return demoappAPI.delete(`/api/v1/notification/${payload.id}/`)
}
function api_v1_nutritionplan_list(payload) {
  return demoappAPI.get(`/api/v1/nutritionplan/`)
}
function api_v1_nutritionplan_create(payload) {
  return demoappAPI.post(`/api/v1/nutritionplan/`, payload)
}
function api_v1_nutritionplan_retrieve(payload) {
  return demoappAPI.get(`/api/v1/nutritionplan/${payload.id}/`)
}
function api_v1_nutritionplan_update(payload) {
  return demoappAPI.put(`/api/v1/nutritionplan/${payload.id}/`, payload)
}
function api_v1_nutritionplan_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/nutritionplan/${payload.id}/`, payload)
}
function api_v1_nutritionplan_destroy(payload) {
  return demoappAPI.delete(`/api/v1/nutritionplan/${payload.id}/`)
}
function api_v1_profile_list(payload) {
  return demoappAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(payload) {
  return demoappAPI.post(`/api/v1/profile/`, payload)
}
function api_v1_profile_retrieve(payload) {
  return demoappAPI.get(`/api/v1/profile/${payload.id}/`)
}
function api_v1_profile_update(payload) {
  return demoappAPI.put(`/api/v1/profile/${payload.id}/`, payload)
}
function api_v1_profile_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/profile/${payload.id}/`, payload)
}
function api_v1_profile_destroy(payload) {
  return demoappAPI.delete(`/api/v1/profile/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return demoappAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_user_list(payload) {
  return demoappAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return demoappAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return demoappAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return demoappAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return demoappAPI.delete(`/api/v1/user/${payload.id}/`)
}
function api_v1_wearabledata_list(payload) {
  return demoappAPI.get(`/api/v1/wearabledata/`)
}
function api_v1_wearabledata_create(payload) {
  return demoappAPI.post(`/api/v1/wearabledata/`, payload)
}
function api_v1_wearabledata_retrieve(payload) {
  return demoappAPI.get(`/api/v1/wearabledata/${payload.id}/`)
}
function api_v1_wearabledata_update(payload) {
  return demoappAPI.put(`/api/v1/wearabledata/${payload.id}/`, payload)
}
function api_v1_wearabledata_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/wearabledata/${payload.id}/`, payload)
}
function api_v1_wearabledata_destroy(payload) {
  return demoappAPI.delete(`/api/v1/wearabledata/${payload.id}/`)
}
function api_v1_workout_list(payload) {
  return demoappAPI.get(`/api/v1/workout/`)
}
function api_v1_workout_create(payload) {
  return demoappAPI.post(`/api/v1/workout/`, payload)
}
function api_v1_workout_retrieve(payload) {
  return demoappAPI.get(`/api/v1/workout/${payload.id}/`)
}
function api_v1_workout_update(payload) {
  return demoappAPI.put(`/api/v1/workout/${payload.id}/`, payload)
}
function api_v1_workout_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/workout/${payload.id}/`, payload)
}
function api_v1_workout_destroy(payload) {
  return demoappAPI.delete(`/api/v1/workout/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return demoappAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return demoappAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return demoappAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return demoappAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return demoappAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return demoappAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return demoappAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return demoappAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return demoappAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return demoappAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return demoappAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_comment_list,
  api_v1_comment_create,
  api_v1_comment_retrieve,
  api_v1_comment_update,
  api_v1_comment_partial_update,
  api_v1_comment_destroy,
  api_v1_communitypost_list,
  api_v1_communitypost_create,
  api_v1_communitypost_retrieve,
  api_v1_communitypost_update,
  api_v1_communitypost_partial_update,
  api_v1_communitypost_destroy,
  api_v1_customreminder_list,
  api_v1_customreminder_create,
  api_v1_customreminder_retrieve,
  api_v1_customreminder_update,
  api_v1_customreminder_partial_update,
  api_v1_customreminder_destroy,
  api_v1_exercise_list,
  api_v1_exercise_create,
  api_v1_exercise_retrieve,
  api_v1_exercise_update,
  api_v1_exercise_partial_update,
  api_v1_exercise_destroy,
  api_v1_goal_list,
  api_v1_goal_create,
  api_v1_goal_retrieve,
  api_v1_goal_update,
  api_v1_goal_partial_update,
  api_v1_goal_destroy,
  api_v1_leaderboard_list,
  api_v1_leaderboard_create,
  api_v1_leaderboard_retrieve,
  api_v1_leaderboard_update,
  api_v1_leaderboard_partial_update,
  api_v1_leaderboard_destroy,
  api_v1_login_create,
  api_v1_meal_list,
  api_v1_meal_create,
  api_v1_meal_retrieve,
  api_v1_meal_update,
  api_v1_meal_partial_update,
  api_v1_meal_destroy,
  api_v1_notification_list,
  api_v1_notification_create,
  api_v1_notification_retrieve,
  api_v1_notification_update,
  api_v1_notification_partial_update,
  api_v1_notification_destroy,
  api_v1_nutritionplan_list,
  api_v1_nutritionplan_create,
  api_v1_nutritionplan_retrieve,
  api_v1_nutritionplan_update,
  api_v1_nutritionplan_partial_update,
  api_v1_nutritionplan_destroy,
  api_v1_profile_list,
  api_v1_profile_create,
  api_v1_profile_retrieve,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_destroy,
  api_v1_signup_create,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  api_v1_wearabledata_list,
  api_v1_wearabledata_create,
  api_v1_wearabledata_retrieve,
  api_v1_wearabledata_update,
  api_v1_wearabledata_partial_update,
  api_v1_wearabledata_destroy,
  api_v1_workout_list,
  api_v1_workout_create,
  api_v1_workout_retrieve,
  api_v1_workout_update,
  api_v1_workout_partial_update,
  api_v1_workout_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
