interface NodeModule {
  hot?: {
    accept(dependency: string, callback: () => void): void;
    accept(dependencies: string[], callback: (updatedDependencies: string[]) => void): void;
    accept(errHandler: (err: any) => void): void;
    decline(dependencies: string[]): void;
    decline(dependency: string): void;
    decline(): void;
  };
}

declare var module: NodeModule;

declare module "react-hot-loader";
declare module "redux-responsive";
declare module "react-test-renderer";
declare module "redux-promise";
