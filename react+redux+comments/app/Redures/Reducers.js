// 这里要处理的变量有三个，初始化，增加，删除
const initComments = 'INIT-COMMENTS';
const addComments = 'ADD-COMMENTS';
const delComments = 'DEL-COMMENTS';


export default function(state, action) {
	if (!state) {
		comments: []
	}
	switch (action.type) {
		case initComments:
			return {
				comments: [...state.comments]

			};
		case addComments:
			return {
				comments: [...state.comments, action.comment]

			};
		case delComments:
			state.comments.slice(0, action.commentIndex)
			return {
				comments: [...state.comments.slice(0, action.commentIndex),
					...state.comments.slice(action.commentIndex + 1)
				]

			};



	}
	return {
		comments
	}
}