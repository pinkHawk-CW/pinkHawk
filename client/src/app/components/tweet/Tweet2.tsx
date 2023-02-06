import { useAppSelector } from '../../hooks/hooks';
import ITweet from '../../interfaces/tweet.interface';
import IUser from '../../interfaces/user.interface';
import userIcon from '../../../images/tom.jpg';
import commentIcon from '../../../images/Twitter_Reply.png';
import retweetIcon from '../../../images/repost.png';
import likeHeart from '../../../images/heart.png';
import './Tweet2.scss'
import dayjs from 'dayjs';

type Props = {
  tweet: ITweet,
  deleteTweet: (tweet: ITweet, index: number) => void,
  moveTweetQueued?: (tweet: ITweet, index: number, nextPostingDate: string) => void,
  index: number,
  nextPostingDate?: string;
};

const SingleTweetTest2 = ({ tweet, deleteTweet, moveTweetQueued, index, nextPostingDate }: Props) => {
  const user: IUser = useAppSelector(({ user }) => user);


  if (!tweet) return null;

  const generateLikes = () => {
    const likes = Math.round(Math.random() * 10 * 10) / 10 + 1
    return likes;
  };
  const generateRetweets = () => {
    const retweets = Math.floor(Math.random() * 500);
    return retweets;
  };
  const generateComments = () => {
    const comments = Math.floor(Math.random() * 500);
    return comments;
  };


  return (
    <>
      <div className='tweet-wrap'>
        {tweet.status === "queued"
          ?
          <div className="date-container">
            <p className='date-header'>Posting time: 
            <span> {dayjs(String(tweet.postingTimestamp)).format(
                'DD/MM/YY HH:mm'
              )}</span>
            </p>
          </div>
          : null
        }

        <div className='tweet-header'>
          <img src={userIcon} alt="" className="avator" />
          <div className="tweet-header-info">
            <div className="icon-group">
              <span className="material-symbols-outlined">edit</span>
              {tweet.status === "suggested" ? <span className="material-symbols-outlined" onClick={() => nextPostingDate && moveTweetQueued && moveTweetQueued(tweet, index, nextPostingDate)}>add_circle</span> : null}
              <span className="material-symbols-outlined" onClick={() => deleteTweet(tweet, index)}>cancel</span>
            </div>
            <p className='user-name'>{user.firstName} {user.lastName} </p>
            <span className='user-screen-name'>@{user.firstName}{user.lastName}</span>
            <p className='tweet-text'>{tweet.text}</p>

            <div className="tweet-info-counts">

              <div className="comments">
                <img height="3" className="tweet-icon" src={commentIcon} alt="" />
                <div className="comment-count">{generateComments()}</div>
              </div>

              <div className="retweets">
                <img className="tweet-icon" src={retweetIcon} alt="retweetIcon" />
                <div className="retweet-count">{generateRetweets()}</div>
              </div>


              <div className="likes">
                <img className="tweet-icon" src={likeHeart} alt="likeHeart" />
                <div className="likes-count">
                  {generateLikes() + "k"}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default SingleTweetTest2;
