import styled from "styled-components";

export const MobileWrapper = styled.div`
  ::-webkit-scrollbar {
    width: 0 !important;
    display:none
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow: auto;
  -ms-overflow-style: none; /* IE 10+ */
  overflow: -moz-scrollbars-none; /* Firefox */
  .moblie-tab-bar {
    flex: 0;
    border-top: solid 1px #ccc;
    .adm-tab-bar-item-active {
      color: #008044;
    }
  }
  .moblie-content {
    flex: 1;
    display: flex;
    overflow-y: scroll;

    /* justify-content: center;
    align-items: center; */
  }
`;
