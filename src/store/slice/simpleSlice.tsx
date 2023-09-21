import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IComment {
  idComment: number | string;
  nameComment: string;
  color: string;
}

export interface INameItem {
  idList: number | string;
  nameItem: string;
  Comments: IComment[];
}

interface SimpleState {
  nameList: INameItem[];
  activeIdList: string | number,
  activeComments: IComment[] | [] | null
}

const nameList = localStorage.getItem("nameList");
const initialState: SimpleState = {
  nameList: nameList ? JSON.parse(nameList) : [
    {
      idList: 1,
      nameItem: 'Next',
      Comments: [
        { idComment: 1, nameComment: 'Simple', color: '#a63a3a' }
      ]
    }
  ],
  activeIdList: '',
  activeComments: null
};

const simpleSlice = createSlice({
  name: 'simples',
  initialState,
  reducers: {
    setActiveIdList(state, action: PayloadAction<string | number>) {
      state.activeIdList = action.payload
    },
    setActiveComents(state) {
      state.activeComments = state.nameList.find(
        (item) => item.idList === state.activeIdList
      )?.Comments ?? [];
    },
    addList(state, action: PayloadAction<INameItem>) {
      state.nameList.push(action.payload);
      localStorage.setItem("nameList", JSON.stringify(state.nameList));
    },
    deleteList(state, action: PayloadAction<string | number>) {
      state.nameList = state.nameList.filter(item => item.idList !== action.payload);
      localStorage.setItem("nameList", JSON.stringify(state.nameList));
    },
    addComent(state, action: PayloadAction<{ comment: IComment }>) {
      const { comment } = action.payload;

      const list = state.nameList.find(item => item.idList === state.activeIdList);
      if (list) {
        list.Comments.push(comment);
        localStorage.setItem("nameList", JSON.stringify(state.nameList));
      }
    },
    deleteComent(state, action: PayloadAction<{ idComment: string | number }>) {
      const { idComment } = action.payload;
      const list = state.nameList.find(item => item.idList === state.activeIdList);
      if (list) {
        list.Comments = list.Comments.filter(comment => comment.idComment !== idComment);
        localStorage.setItem("nameList", JSON.stringify(state.nameList));
      }
    },
  }
});

export const simpleActions = simpleSlice.actions

export const simpleReducer = simpleSlice.reducer;
