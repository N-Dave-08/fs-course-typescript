type Constructor<T = {}> = new (...args: any[]) => T;

function WithTimestamp<TBase extends Constructor>(Base: TBase) {
	return class extends Base {
		createdAt = new Date();
	};
}

class BaseService {
	ping() {
		return "pong";
	}
}

const TimestampedService = WithTimestamp(BaseService);
const svc = new TimestampedService();
svc.createdAt;
svc.ping();
