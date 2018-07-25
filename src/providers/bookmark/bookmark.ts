import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

/*
 * ローカルストレージ プロバイダー
 */
@Injectable()
export class BookmarkProvider {

  constructor(public storage: Storage) {}

  // 取得
  get() {
    return this.storage.get("bookmark.events").then(events => {
      return events ? events : {};
    });
  }

  // 更新
  put(event: any) {
    return this.get().then(events => {
      events[event.event_id] = event;
      return this.storage.set("bookmark.events", events);
    })
  }

  // 削除
  delete(event: any) {
    return this.get().then(events => {
      delete events[event.event_id];
      return this.storage.set("bookmark.events", events);
    })
  }
}