import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import api from '~/Services/api';

import {
  Container,
  Bagde,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(() => {
    return !!notifications.find(notification => notification.read === false);
  }, [notifications]);

  useEffect(() => {
    async function loadNotifications() {
      try {
        const response = await api.get('notification');

        const data = response.data.map(notification => ({
          ...notification,
          timeDistance: formatDistance(
            parseISO(notification.createdAt),
            new Date(),
            {
              addSuffix: true,
              locale: pt,
            }
          ),
        }));
        setNotifications(data);
      } catch (e) {
        console.tron.error(e);
      }
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`/notification/${id}`);
    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Bagde hasUnread={hasUnread} onClick={() => handleToggleVisible()}>
        <MdNotifications color="#7159c1" size={20} />
      </Bagde>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              <button
                onClick={() => handleMarkAsRead(notification._id)}
                type="button"
              >
                Marcar como lida
              </button>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
