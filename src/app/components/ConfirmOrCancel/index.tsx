import { MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";

import Button from "../Button";

export type Props = {
  disabled?: boolean;
  loading?: boolean;
  label?: string;
  onConfirm: MouseEventHandler;
  onCancel: MouseEventHandler;
};

export default function ConfirmOrCancel({
  disabled = false,
  loading = false,
  label = "Confirm",
  onConfirm,
  onCancel,
}: Props) {
  const { t: tCommon } = useTranslation("common");
  return (
    <div className="pt-2 pb-4">
      <div className="flex flex-row justify-between">
        <Button
          onClick={onCancel}
          label={tCommon("actions.cancel")}
          halfWidth
        />
        <Button
          onClick={onConfirm}
          label={label}
          primary
          disabled={disabled}
          loading={loading}
          halfWidth
        />
      </div>
    </div>
  );
}
