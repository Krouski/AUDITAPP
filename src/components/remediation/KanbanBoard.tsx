import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Task } from '../../types';

interface KanbanBoardProps {
  tasks: Task[];
  onTaskMove: (taskId: string, newStatus: Task['status']) => void;
}

export default function KanbanBoard({ tasks, onTaskMove }: KanbanBoardProps) {
  const columns: Task['status'][] = ['To Do', 'In Progress', 'Completed'];

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const sourceColumn = result.source.droppableId;
    const destinationColumn = result.destination.droppableId;
    
    if (sourceColumn !== destinationColumn) {
      const taskId = result.draggableId;
      onTaskMove(taskId, destinationColumn as Task['status']);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((column) => (
          <div key={column} className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-4">{column}</h3>
            <Droppable droppableId={column}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="space-y-2"
                >
                  {tasks
                    .filter((task) => task.status === column)
                    .map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white p-4 rounded shadow"
                          >
                            <h4 className="font-medium">{task.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {task.description}
                            </p>
                            <div className="mt-2 text-sm text-gray-500">
                              {task.assignedTeam} · Due {new Date(task.dueDate).toLocaleDateString()}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}