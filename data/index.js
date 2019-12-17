const data = {
  notificationDTOList: [
    {
      pkNotificationId: 25,
      notificationType: {
        name: 'Notification Type1',
        notificationTypeAction: [
          {
            pkNotificationTypeActionId: 1,
            actionName: 'Reset',
            actionIcon: null,
            actionClickHandler: 'dms.icon.actionHandler',
          },
        ],
      },
      notificationRenderType: {
        renderType: 'notification',
      },
      notificationText: 'overrideText',
      createdTime: 1574860228000,
      status: 'SENT',
    },
    {
      pkNotificationId: 26,
      notificationType: {
        name: 'Notification Type1',
        notificationTypeAction: [
          {
            pkNotificationTypeActionId: 1,
            actionName: 'Reset',
            actionIcon: null,
            actionClickHandler: 'dms.icon.actionHandler',
          },
        ],
      },
      notificationRenderType: {
        renderType: 'notification',
      },
      notificationText: 'Test Final 2',
      createdTime: 1574932540000,
      status: 'SENT',
    },
  ],
  criteriaValue: 'usr8',
  type: 'ONLOAD',
  uiStoreRefreshRequired: true,
};

module.exports = {
  data,
};
