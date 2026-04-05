const Task = require("../models/Task");

const taskController = {
  async getAllTasks(req, res) {
    try {
      const tasks = await Task.find().sort({ createdAt: -1 });
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las tareas" });
    }
  },

  async getTaskById(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findById(id);

      if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }

      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener la tarea" });
    }
  },

  async createTask(req, res) {
    try {
      const { title, description, priority, category, dueDate } = req.body;

      if (!title || title.trim().length < 3) {
        return res.status(400).json({
          message: "El título es obligatorio y debe tener al menos 3 caracteres"
        });
      }

      const newTask = await Task.create({
        title,
        description,
        priority,
        category,
        dueDate
      });

      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ message: "Error al crear la tarea" });
    }
  },

  async updateTask(req, res) {
    try {
      const { id } = req.params;
      const { title, description, priority, category, dueDate, completed } = req.body;

      if (!title || title.trim().length < 3) {
        return res.status(400).json({
          message: "El título es obligatorio y debe tener al menos 3 caracteres"
        });
      }

      const updatedTask = await Task.findByIdAndUpdate(
        id,
        {
          title,
          description,
          priority,
          category,
          dueDate,
          completed
        },
        { new: true, runValidators: true }
      );

      if (!updatedTask) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }

      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar la tarea" });
    }
  },

  async toggleCompleted(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findById(id);

      if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }

      task.completed = !task.completed;
      await task.save();

      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error al cambiar el estado de la tarea" });
    }
  },

  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const deletedTask = await Task.findByIdAndDelete(id);

      if (!deletedTask) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }

      res.status(200).json({ message: "Tarea eliminada correctamente" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar la tarea" });
    }
  }
};

module.exports = taskController;