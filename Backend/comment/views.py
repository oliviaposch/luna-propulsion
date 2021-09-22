from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.response import Response
from .models import Comment
from .serializers import CommentSerializer

class ListCommentsFromUser(GenericAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get(self, request, *args, **kwargs):
        filtered_queryset = self.get_queryset().filter(author=self.kwargs["user_id"])
        serializer = self.get_serializer(filtered_queryset, many=True)
        if serializer.data:
            return Response(serializer.data)
        else:
            return Response(data={"error": "no comments found for this user"}, status=404)

class CreateCommentOnReview(GenericAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(author=request.user)
        return Response(serializer.data)