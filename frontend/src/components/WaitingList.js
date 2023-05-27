import WaitingListItem from './WaitingListItem';

const testDatas = [
    {waitingNumber:13, lineUserId:'minmin', status:'waiting', groupSize:2, requestMadeTime:'18:16', requestAnsweredTime: '18:25', arriveTime: undefined, cancelTime: undefined},
    {waitingNumber:14, lineUserId:'abc', status:'waiting', groupSize:4, requestMadeTime:'18:20', requestAnsweredTime: undefined, arriveTime: undefined, cancelTime: undefined},
]
// waitingNumber, lineUserId, status, groupSize, requestMadeTime, requestAnsweredTime, arriveTime, cancelTime

const WaitingList = () => {

    return (
        <div>
            Waiting List
            {
                testDatas.map((item, id) => {
                    <WaitingListItem item={item} key={`waiting-list-item-${id}`} />
                })
            }
        </div>
    );
}

export default WaitingList;