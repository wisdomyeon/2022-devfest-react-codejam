import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import MainPage from 'src/components/pages/MainPage';
import DetailPage from 'src/components/pages/DetailPage';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    //페이지 등록한 것.
    MainPage,
    DetailPage,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino', //ios 선택
      backgroundColor: '#212124',
    }),
  ],
  initialActivity: () => 'MainPage',
});
