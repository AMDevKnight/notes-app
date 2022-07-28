import { MdDeleteForever, MdNavigateNext, MdUpdate } from 'react-icons/md';
import { useState } from 'react';

const Note = ({ id, text, date, handleDeleteNote, handleUpdateNote }) => {
	const [noteText, setNoteText] = useState(`${text}`);
	const [update, setUpdate] = useState(['false']);
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	return (<>
		{update === 'false' ? (
			<div className='note'>
				<textarea className='update-textarea'
					rows='8'
					cols='10'
					value={noteText}
					onChange={handleChange}
				></textarea>
				<div className='note-button'>
					<MdNavigateNext
						onClick={() => {
							setUpdate('ture')
							handleUpdateNote(id, noteText)
						}}
						className='success-icon'
						size='1.3em'
					></MdNavigateNext>
				</div>
			</div>
		) : (<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<div className='note-button'>
					<MdUpdate
						onClick={() =>
							setUpdate('false')}
						className='update-icon'
						size='1.3em'
					/>
					<MdDeleteForever
						onClick={() => handleDeleteNote(id)}
						className='delete-icon'
						size='1.3em'
					/>
				</div>
			</div>
		</div>
		)}
	</>
	);
};

export default Note;
