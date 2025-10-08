const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

    // Get all comments for a specific post (expects postId as query param)
    router.get("/", async (req, res, next) => {
        try {
            const { postId } = req.query;
            /**
             * Creates a filter object for querying comments by post ID.
             * If postId is provided, the filter will include only comments for that post.
             * Otherwise, the filter will include all comments.
             *
             * @type {{ post?: string }}
             */
            /**
             * Creates a filter object for querying comments based on the provided postId.
             * If postId is defined, the filter will match comments for that specific post.
             * Otherwise, the filter will match all comments.
             *
             * @type {Object}
             * @property {string} [post] - The ID of the post to filter comments by.
             */
            /**
             * @fileoverview Express router for handling comment-related API endpoints.
             * Provides routes to get all comments for a specific post and delete a comment by its ID.
             *
             * @module routes/api/comments
             */

                        /**
                         * Defines the filter object used to query comments by post ID.
                         * If a postId is provided, the filter will only include comments for that post.
                         * Otherwise, the filter will include all comments.
                         *
                         * @type {Object}
                         * @property {string} [post] - The ID of the post to filter comments by.
                         */
            const filter = postId ? { post: postId } : {};
            /**
             * Retrieves comments from the database that match the specified filter.
             * @type {Array<Comment>}
             */
            const comments = await Comment.find(filter);
            res.json(comments);
        } catch (err) {
            next(err);
        }
    });

    // Delete a comment by comment id
    router.delete("/:commentId", async (req, res, next) => {
        try {
            await Comment.findByIdAndDelete(req.params.commentId);
            res.sendStatus(200);
        } catch (err) {
            next(err);
        }
    });