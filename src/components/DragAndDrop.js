import React from 'react';
import { DndProvider } from 'react-dnd'; 
import { HTML5Backend } from 'react-dnd-html5-backend';
import DnD from './DnD';

function DragAndDrop() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <DnD/>
            </div>
        </DndProvider>
    );
}

export default DragAndDrop;
