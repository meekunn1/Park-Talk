const router = require('express').Router();
const { Park, Review, Tag, ReviewTag } = require('../../models');

// The `/api/Review` endpoint
//need to add User and maybe session related contents.

// create new review
router.post('/', async (req, res) => {
  try {
    const reviewData = await Review.create({
      title: req.body.title,
      // facility: req.body.facility,
      comment: req.body.comment,
      user_id: req.body.userID,
      park_id: req.body.parkID
    });

    console.log(reviewData)

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// // get all Review
// router.get('/', async (req, res) => {
//   // find all Review
//   try {
//     const reviewData = await Review.findAll({
//       include: [{model: Park}, {model: Tag}]
//         // connects park and tag.
//         //need to add user
//     });
//     res.status(200).json(reviewData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // get one review
// router.get('/:id', async (req, res) => {
//   // find a single review by its `id`
//   try {
//     const reviewData = await Review.findByPk(req.params.id, {
//       include: [{model: Park}, {model: Tag}]
//       //need to add user
//     });
//     res.status(200).json(reviewData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // update review
// router.put('/:id', (req, res) => {
//   // update review data
//   Review.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((review) => {
//       if (req.body.tagIds && req.body.tagIds.length) {
        
//         ReviewTag.findAll({
//           where: { review_id: req.params.id }
//         }).then((reviewTags) => {
//           // create filtered list of new tag_ids
//           const reviewTagIds = reviewTags.map(({ tag_id }) => tag_id);
//           const newReviewTags = req.body.tagIds
//           .filter((tag_id) => !reviewTagIds.includes(tag_id))
//           .map((tag_id) => {
//             return {
//               review_id: req.params.id,
//               tag_id,
//             };
//           });

//             // figure out which ones to remove
//           const reviewTagsToRemove = reviewTags
//           .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//           .map(({ id }) => id);
//                   // run both actions
//           return Promise.all([
//             ReviewTag.destroy({ where: { id: reviewTagsToRemove } }),
//             ReviewTag.bulkCreate(newReviewTags),
//           ]);
//         });
//       }

//       return res.json(review);
//     })
//     .catch((err) => {
//       // console.log(err);
//       res.status(400).json(err);
//     });
// });

// router.delete('/:id', async (req, res) => {
//   // delete one review by its `id` value
//   try {
//     const reviewData = await Review.destroy({where: {id: req.params.id}});
//     res.status(200).json(reviewData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;