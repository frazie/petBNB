const Comment = require("../models/Comment");
const User = require("../models/User")

module.exports = {
  
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
        commentBy: req.user.userName,
        commentById: req.user.id,
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.deleteOne({
        _id: req.params.commentid
      })
      console.log("Comment deleted");
      res.redirect("/post/"+req.params.postid)

    } catch (err) {
      console.log(err);
    }
  }
//   likeComment: async (req, res) => {
//     try {
//       await Comment.findOneAndUpdate(
//         { post: req.params.commentid },
//         {
//           $inc: { likes: 1 },
//         }
//       );
//       console.log("Likes +1");
//       res.redirect("/post/"+req.params.id);
//     } catch (err) {
//       console.log(err);
//     }
//   },
  
};
