// type类型
const ADD_ITEM = 'add_item';
const DEL_ITEM = 'del_item';
const INIT_ITEM = 'init_item';
const TO_DOING = 'to_doing';
const TO_DID = 'to_did';

// redurecs
export default function(state, action) {

	if (!state) {
		state = {
			contents: [],
			doingContents: [],
			didContents: []
		}
	}
	switch (action.type) {
		case ADD_ITEM:
			return {
				contents: [...state.contents, action.content],
				doingContents: [...state.doingContents],
				didContents: [...state.didContents],

			}
		case DEL_ITEM:
			return {
				contents: [
					...state.contents.slice(0, action.itemIndex),
					...state.contents.slice(action.itemIndex + 1)
				],
				doingContents: [...state.doingContents],
				didContents: [...state.didContents],
			}
		case INIT_ITEM:
			return {
				contents: [...action.cont.contents],
				doingContents: [...action.cont.doingContents],
				didContents: [...action.cont.didContents],
			}
		case TO_DOING:
			const content = state.contents[action.itemIndex]
			return {
				doingContents: [...state.doingContents,
					content
				],
				contents: [
					...state.contents.slice(0, action.itemIndex),
					...state.contents.slice(action.itemIndex + 1)
				],
				didContents: [...state.didContents],

			}
		case TO_DID:
			const didContent = state.doingContents[action.itemIndex]
			return {
				contents: [...state.contents],
				doingContents: [
					...state.doingContents.slice(0, action.itemIndex),
					...state.doingContents.slice(action.itemIndex + 1)
				],
				didContents: [...state.didContents,
					didContent
				],

			}

		default:
			return state

	}
}


// action创造函数

export function add_item(content) {
	return {
		type: ADD_ITEM,
		content
	}
}

export function del_item(itemIndex) {
	return {
		type: DEL_ITEM,
		itemIndex
	}
}

export function init_item(contents, doingContents, didContents) {
	return {
		type: INIT_ITEM,
		cont: {
			contents,
			doingContents,
			didContents
		}
	}
}
export function to_doing(itemIndex) {
	return {
		type: TO_DOING,
		itemIndex
	}
}
export function to_did(itemIndex) {
	return {
		type: TO_DID,
		itemIndex
	}
}