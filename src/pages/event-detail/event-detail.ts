import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { BookmarkProvider } from '../../providers/bookmark/bookmark';
/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  event: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public eventProvider: EventProvider,
    public toastCtrl: ToastController,
    public bookmarkProvider: BookmarkProvider
  ) {
  }

  // 画面初期時に呼ばれるメソッド
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
    this.event = this.navParams.data.event;
  }

  // ブックマーク押下時
  doBookmark() {
    this.bookmarkProvider.put(this.event).then(() => {
      const toast = this.toastCtrl.create({
        message: 'イベントをブックマークしました。',
        duration: 1500
      });
      toast.present();
    })
  }

}
