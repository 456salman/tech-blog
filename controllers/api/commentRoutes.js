const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newcomment = await Post.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newcomment);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const commnetData = await Post.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!commentData) {
//       res.status(404).json({ message: 'No post found with this id!' });
//       return;
//     }

//     res.status(200).json(commentData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



router.get("/", withAuth, (req, res) => {
    comment.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User
        },
      ],
    })
      .then((commentData) => {
        // serialize data before passing to template
        const comment = commentData.map((commemt) => comment.get({ plain: true }));
        console.log(comment);
  
        res.render("commentpage", { comment, logged_in: req.session.logged_in });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get("/comment/:id", async (req, res) => {
    try {
      const commenttData = await comment.findByPk(req.params.id, {
        include: [
          {
            model: User,
          },
          {
            model: Expense,
          },
        ],
      });
  
      const comment = comment.get({ plain: true });
      console.log("============this is comment data" + JSON.stringify(comment));
      res.render("commentpage", {
        comment,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;













