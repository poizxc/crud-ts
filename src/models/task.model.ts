import mongoose, { Schema } from 'mongoose';

export interface Task extends Document {
  title: string;
  description?: string;
  status: string;
  category: string;
}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  status: { type: String, required: true },
  category: { type: String, required: true },
});

export default mongoose.model<Task>('Task', TaskSchema);
