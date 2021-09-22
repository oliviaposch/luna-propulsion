from django.http import Http404
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from .models import Review
from review.serializer.serializers import ReviewSerializer
from .permissions import IsAuthorOrSuperuserOrReadOnly
from restaurant.models import Restaurant

#### CHANGE BELOW TO GUILLAUME's########
"""
class CreateRestaurantReviews(GenericAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "restaurant_id"

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(author=request.user)
        return Response(serializer.data)
"""


class CreateRestaurantReviews(GenericAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "restaurant_id"

    def post(self, request,*args, **kwargs):
        restaurant = self.get_object()
        if 'rating' in request.data.keys():
            review = Review(
                restaurant=restaurant,
                author=request.user,
                text=request.data['text'],
                rating=request.data['rating'],
            )
        else:
            review = Review(
                restaurant=restaurant,
                author=request.user,
                text=request.data['text'],
            )

        review.save()
        return Response(self.get_serializer(instance=review).data)


class ListRestaurantReviews(GenericAPIView):

    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def get(self, request, *args, **kwargs):
        filtered_queryset = self.get_queryset().filter(restaurant=self.kwargs["restaurant_id"])
        serializer = self.get_serializer(filtered_queryset, many=True)
        if serializer.data:
            return Response(serializer.data)
        else:
            return Response(data={"error": "restaurant does not exist"}, status=404)


class ListAllRestaurantReviews(GenericAPIView):

    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListUserReviews(GenericAPIView):

    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def get(self, request, *args, **kwargs):
        filtered_queryset = self.get_queryset().filter(author=self.kwargs["user_id"])
        serializer = self.get_serializer(filtered_queryset, many=True)
        if serializer.data:
            return Response(serializer.data)
        else:
            return Response(data={"error": "no reviews found for this user"}, status=404)


class RetrieveUpdateDeleteReview(GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "review_id"
    lookup_field = "id"
    permission_classes = [IsAuthorOrSuperuserOrReadOnly]

    def get(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
        except Http404:
            return Response(data={"error": "review does not exist"}, status=404)

        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            instance.delete()
        except Http404:
            return Response(data={"error": "review does not exist"}, status=404)
        return Response(data={"success": "review has been deleted."}, status=200)


class ToggleLikeReview(GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "review_id"
    lookup_field = "id"

    def post(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        if request.user in instance.likes.all():
            instance.likes.remove(request.user)
        else:
            instance.likes.add(request.user)
        return Response(serializer.data)


class ListCurrentUserLikes(GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    # with ListAPIView:
    # def get_queryset(self):
    #     return self.request.user.liked_reviews

    def get(self, request, *args, **kwargs):

        filtered_queryset = self.get_queryset().filter(likes=request.user)
        serializer = self.get_serializer(filtered_queryset, many=True)
        if serializer.data:
            return Response(serializer.data)
        else:
            return Response(data={"error": "user did not like any review"}, status=404)


###### MISSING VIEW TO DISPLAY THE REVIEWS THE CURRENT USER COMMENTED #########