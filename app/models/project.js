// models/project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  projectName: {
    type: String,
    required: true,
    trim: true
  },
  package: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: {type: String, required: true}
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// models/Project.js
projectSchema.virtual('id').get(function() {
  return this._id.toString();
});

// Ensure virtuals are included in toJSON output
projectSchema.set('toJSON', { virtuals: true });

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;